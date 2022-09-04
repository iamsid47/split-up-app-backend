export default {
  name: "transaction",
  title: "Transaction",
  type: "document",
  fields: [
    {
      name: "userId",
      title: "UserId",
      type: "string",
    },
    {
      name: "postedBy",
      title: "PostedBy",
      type: "postedBy",
    },
    {
      name: "transactionName",
      title: "TransactionName",
      type: "string",
    },
    {
      name: "amountTotal",
      title: "AmountTotal",
      type: "string",
    },
    {
      name: "amountPaid",
      title: "AmountPaid",
      type: "string",
    },
    {
      name: "totalPeople",
      title: "TotalPeople",
      type: "string",
    },
  ],
};
