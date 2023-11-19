/* eslint-disable prettier/prettier */
interface Transaction {
  type: number;
  date: string;
  product: string;
  value: number;
  seller: string;
  affiliateId: string;
}

function generateAffiliateId(seller: string): string {
  return `${seller}_affiliate`;
}

export async function parseFileContent(fileContent: string) {
  const lines = fileContent.split('\n');

  const transactions: Transaction[] = lines.map((line) => {
    const type = parseInt(line.substring(0, 1));
    const date = line.substring(1, 26);
    const product = line.substring(26, 56).trim();
    const value = parseInt(line.substring(56, 66));
    const seller = line.substring(66, 86).trim();
    const affiliateId = generateAffiliateId(seller);

    return { type, date, product, value, seller, affiliateId };
  });

  return await transactions;
}

export async function normalizeTransactions(
  transactions: Transaction[],
): Promise<Transaction[]> {
  const data = transactions.map((transactions) => {
    const normalizedValue = transactions.value / 100;

    return {
      type: transactions.type,
      date: transactions.date,
      product: transactions.product,
      value: normalizedValue,
      seller: transactions.seller,
      affiliateId: generateAffiliateId(transactions.seller),
    };
  });

  return data;
}
