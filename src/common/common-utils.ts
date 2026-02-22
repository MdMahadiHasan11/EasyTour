import dayjs from "dayjs";

type FormatAmountType = "1,000.00" | "1.000,00" | "1'000.00" | "1,000";

export class Utils {
  static formatDateRange(
    dates: [dayjs.Dayjs | null, dayjs.Dayjs | null],
  ): string {
    if (!dates || dates.length !== 2) return "";

    const [start, end] = dates;
    return `${dayjs(start).format("DD-MM-YYYY")} to ${dayjs(end).format(
      "DD-MM-YYYY",
    )}`;
  }
  static formatDate(dates: string): string {
    return dayjs(dates).format("DD-MM-YYYY");
  }

  static formatSnackCase = (text: string) => {
    return text
      ? text
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : "";
  };

  static formatNarration = (text: string) => {
    return text
      .toLowerCase()
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  static formatAmount(
    amount: number | string,
    format: FormatAmountType = "1,000.00",
  ): string {
    const numericAmount = Number(amount || 0);
    const isNegative = numericAmount < 0;

    const absoluteAmount = Math.abs(numericAmount);
    const integerPart = Math.floor(absoluteAmount);
    const decimalPart = Math.round((absoluteAmount - integerPart) * 100);

    let formatted = "";

    switch (format) {
      case "1.000,00": // European format
        formatted = `${integerPart.toLocaleString("de-DE")},${decimalPart
          .toString()
          .padStart(2, "0")}`;
        break;

      case "1'000.00": // Swiss format
        formatted = `${integerPart.toLocaleString("de-CH")}.${decimalPart
          .toString()
          .padStart(2, "0")}`;
        break;

      case "1,000":
        formatted = `${integerPart.toLocaleString("en-US")}`;
        break;

      case "1,000.00":
      default:
        formatted = `${integerPart.toLocaleString("en-US")}.${decimalPart
          .toString()
          .padStart(2, "0")}`;
        break;
    }

    return isNegative ? `-${formatted}` : formatted;
  }

  static formatCurrency(amount: number): string {
    const formattedNumber = this.formatAmount(amount);
    return `৳ ${formattedNumber}`;
  }
  static formatCurrencyBDT(amount: number): string {
    const formattedNumber = this.formatAmount(amount);
    return `BDT ${formattedNumber}`;
  }
}
