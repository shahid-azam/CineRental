export function getImgUrl(name) {
  return new URL(`../../public/movie-covers/${name}`, import.meta.url).href;
}
