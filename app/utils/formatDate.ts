const formatDate = (date:string) => {
  const newDate = new Date(date);

  return newDate.toLocaleDateString('es-Es', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });
};

export default formatDate;
