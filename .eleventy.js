module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/Asset/style.css");
  eleventyConfig.addPassthroughCopy("./src/Assets");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
