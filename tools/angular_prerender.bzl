"""Helper macros for rendering parts of an Angular application at build time"""

load("@build_bazel_rules_nodejs//:index.bzl", _nodejs_binary = "nodejs_binary")
load("@npm_bazel_typescript//:index.bzl", _ts_library = "ts_library")

def _get_output_path(route, root_at):
    return root_at + "/" + route + "/index.html"

def ng_prerender(name, index, renderer, app, prerender_roots = [], **kwargs):
    """Helper macro for prerendering Angular routes to index files as part of the build."""

    renderer_lib = "%s_renderer_lib" % name
    _ts_library(
        name = renderer_lib,
        srcs = [renderer],
        tsconfig = "//:tsconfig.server.json",
        deps = [
            app,
            "@npm//@angular/platform-server",
            "@npm//zone.js",
            "@npm//domino",
            "@npm//reflect-metadata",
            "@npm//@types/node",
        ],
    )

    bin = "%s_bin" % renderer_lib
    _nodejs_binary(
        name = bin,
        data = [
            ":%s" % renderer_lib,
            "@npm//@angular/platform-server",
            "@npm//zone.js",
            "@npm//domino",
            "@npm//reflect-metadata",
        ],
        entry_point = renderer,
    )

    root_at = "_prerender/" + native.package_name()

    # we can't output "foo/index.html" since that collides with source files and will likely cross a package boundary
    # so we output "_prerender/pkg_name/route/index.html"
    prerender_root_outs = [_get_output_path(route, root_at) for route in prerender_roots]
    root_index = "%s/index.html" % root_at

    visibility = kwargs.pop("visibility", [])

    native.genrule(
        name = name,
        srcs = [index],
        outs = [root_index] + prerender_root_outs,
        cmd = "$(location :%s) --index $(location %s) --outs $(OUTS) --routes / %s" % (bin, index, " ".join(prerender_roots)),
        tools = [":%s" % bin],
        message = "Prerendering Angular",
        visibility = visibility,
        tags = kwargs.pop("tags", []),
    )

    # convenience "output groups" from macro
    native.alias(
        name = "%s.root" % name,
        actual = root_index,
        visibility = visibility,
    )

    for route in prerender_roots:
        native.alias(
            name = "%s.%s" % (name, route.replace("/", "_")),
            actual = _get_output_path(route, root_at),
            visibility = visibility,
        )
