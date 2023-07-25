export const getCellColor = (contributionAmount?: number) => {
  if (contributionAmount) {
    if (contributionAmount >= 1 && contributionAmount <= 9) {
      return 100
    }

    if (contributionAmount >= 10 && contributionAmount <= 19) {
      return 200
    }

    if (contributionAmount >= 20 && contributionAmount <= 29) {
      return 300
    }

    if (contributionAmount >= 30) {
      return 400
    }
  }

  return 0
}
