<template>
  <div class="submit-form">
    <div v-if="!submitted">

      <div class="form-group">
        <label for="value">value</label>
        <input
          type="text"
          class="form-control"
          id="value"
          required
          v-model="transaction.value"
          name="value"
        />
      </div>

      <div class="form-group">
        <label for="origin">origin</label>
        <input
          type="text"
          class="form-control"
          id="origin"
          required
          v-model="transaction.origin"
          name="origin"
        />
      </div>


      <div class="form-group">
        <label for="kind">kind</label>
        <input
          type="text"
          class="form-control"
          id="kind"
          required
          v-model="transaction.kind"
          name="kind"
        />
      </div>

      <div class="form-group">
        <label for="date">date</label>
        <input
          class="form-control"
          id="date"
          required
          v-model="transaction.date"
          name="date"
        />
      </div>

      <button @click="saveTransaction" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTransaction">Add</button>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TransactionDataService";

export default {
  name: "add-transaction",
  data() {
    return {
      transaction: {
        id: null,
        value: "",
        origin: "",
        kind:"",
        date:"",
      },
      submitted: false,
    };
  },
  methods: {
    saveTransaction() {
      var data = {
        value: this.transaction.value,
        origin: this.transaction.origin,
        kind: this.transaction.kind,
        date: this.transaction.date,
      };

      TutorialDataService.create(data)
        .then((response) => {
          this.transaction.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newTransaction() {
      this.submitted = false;
      this.transaction = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
