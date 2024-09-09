const generateSlug = (title) => {
  let slug = title
    .replace(/ /g, '-')
    .replace(/&/g, 'and')
    .replace(/,/g, '')
    .toLowerCase();

  return slug;
};

export default generateSlug;
