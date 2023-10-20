import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = tree.toString();
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.readingTime = readingTime.text;
  };
}
