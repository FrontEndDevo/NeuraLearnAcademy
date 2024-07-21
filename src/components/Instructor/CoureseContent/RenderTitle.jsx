const RenderTitle = (item) => {
  if (item.video) return item.video.title;
  if (item.image) return item.image.title;
  if (item.file) return item.file.title;
  return item.text.title;
};
export default RenderTitle;