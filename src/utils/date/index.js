export const getTimeChat = date => {
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${hour}:${minute} ${hour > 12 ? 'PM' : 'AM'}`;
};

export const getDateChat = date => {
  const day = date.getDate();
  const monthName = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const month = monthName[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
