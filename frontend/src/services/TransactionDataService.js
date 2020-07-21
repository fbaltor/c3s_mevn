import http from "../http-common";

class TransactionDataService {
  create(data) {
    return http.post("/transactions", data);
  }

  update(id, data) {
    return http.put(`/transactions/${id}`, data);
  }

  delete(id) {
    return http.delete(`/transactions/${id}`);
  }

  deleteAll() {
    return http.delete("/transactions");
  }

  displayOne(id) {
    return http.get(`/transactions/${id}`);
  }

  displayAll() {
    return http.get("/transactions");
  }

  cashFlow() {
    return http.get("/transactions/cashflow");
  }
}

export default new TransactionDataService();
