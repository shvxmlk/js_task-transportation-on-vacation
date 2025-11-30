/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const discount7Days = 50;
  const discount3Days = 20;

  if (days <= 0) {
    return 0;
  }

  const baseCost = days * costPerDay;

  if (days >= 7) {
    return baseCost - discount7Days;
  }

  if (days >= 3) {
    return baseCost - discount3Days;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
