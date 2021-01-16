const del = require("del").sync;

module.exports = (eleventyConfig) => {
  // Purge the output directory before rebuiding site.
  del("./www");

  // Sort these custom collections by descending date (newest first).
  eleventyConfig.addCollection("blogRecentByTags", (collectionApi) => collectionApi.getFilteredByTags("blog").sort(sortDateDesc));
  eleventyConfig.addCollection("blogRecentByGlob", (collectionApi) => collectionApi.getFilteredByGlob("src/blog/*.liquid").sort(sortDateDesc));

  eleventyConfig.addFilter("localeDateString", date => new Date(date).toLocaleDateString());

  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};

function sortDateDesc(a, b) {
  return b.date - a.date;
}
