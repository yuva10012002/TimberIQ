import jsPDF from "jspdf";

export const generatePDF = (
  customerName: string,
  phone: string,
  product: string,
  quantity: number,
  price: number,
  total: number
) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("TIMBERIQ INVOICE", 20, 20);

  doc.setFontSize(12);
  doc.text(`Customer: ${customerName}`, 20, 40);
  doc.text(`Phone: ${phone}`, 20, 50);
  doc.text(`Product: ${product}`, 20, 60);
  doc.text(`Quantity: ${quantity}`, 20, 70);
  doc.text(`Price: ₹${price}`, 20, 80);

  doc.setFontSize(16);
  doc.text(`Total: ₹${total}`, 20, 100);

  doc.save(`Invoice-${customerName}.pdf`);
};