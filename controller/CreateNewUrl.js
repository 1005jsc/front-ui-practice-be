export const getUrl = async (req, res, next) => {
  console.log('오 여기까지 잘 왔군');
  const yo = [
    { url: '1', template: 1 },
    { url: '2', template: 2 },
    { url: '3', template: 3 },
  ];

  res.status(200).json(yo);
};
