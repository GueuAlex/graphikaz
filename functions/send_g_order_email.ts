export async function sendGOrderEmail(transactionRef: string) {
  const url = `${process.env.API_BASE_URL}sender/g-order-email`;
  const token = process.env.AUTH_KEY; // Remplacez par votre Bearer token

  const body = {
    transaction_ref: transactionRef,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending order email:", error);
    throw error;
  }
}
