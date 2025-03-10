function PaymentPage() {
  return (
    <main className="flex flex-col gap-6 w-full px-6 sm:px-12">
      <h1 className="font-semibold uppercase text-4xl sm:text-7xl">Payment</h1>
      <section>
        <h2 className="font-semibold uppercase">Accepted Payment Options</h2>
        <ul className="pl-6 list-disc">
          <li>Debit Card</li>
          <li>Credit Card</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold uppercase">Further Details</h2>
        <p>
          If payment is made using a credit card, your credit card account is
          debited in conjunction with the conclusion of the contract.
        </p>
      </section>
    </main>
  );
}

export default PaymentPage;
