function getDayName(dayNumber) {
  let dayName;

  switch (dayNumber) {
    case 1:
      dayName = "Senin";
      break;
    case 2:
      dayName = "Selasa";
      break;
    case 3:
      dayName = "Rabu";
      break;
    case 4:
      dayName = "Kamis";
      break;
    case 5:
      dayName = "Jumat";
      break;
    case 6:
      dayName = "Sabtu";
      break;
    case 7:
      dayName = "Minggu";
      break;
    default:
      dayName = "hari harus kurangdari 8";
      break;
  }

  return dayName;
}

for (let i = 1; i < 8; i++) {
  console.log(`Hari ke-${i}: ${getDayName(i)}`);
}
