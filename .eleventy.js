const del = require("del").sync;

module.exports = (eleventyConfig) => {
  // Purge the output directory.
  del("./www");

  // Sort these custom collections by date, descending (newest first).
  eleventyConfig.addCollection("blogRecentByTags", (collectionApi) => collectionApi.getFilteredByTags("blog").sort((a, b) => b.date - a.date));
  eleventyConfig.addCollection("blogRecentByGlob", (collectionApi) => collectionApi.getFilteredByGlob("src/blog/*.liquid").sort((a, b) => b.date - a.date));

  eleventyConfig.addFilter("localeDateString", date => new Date(date).toLocaleDateString());

  eleventyConfig.setDataDeepMerge(true);

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
