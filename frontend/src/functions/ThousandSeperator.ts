export default function thousandSeperator(number: number | string): string {
  const numStr = number.toString();
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
