<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>transactions list</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(transaction, index) in transactions"
          :key="index"
          @click="setActiveTransaction(transaction, index)"
        >
          {{ tutorial.id }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTransactions">
        Remove All
      </button>
    </div>

    <div class="col-md-6">
      <div v-if="currentTransaction">
        <h4>transaction</h4>
        <div>
          <label><strong>value:</strong></label> {{ currentTransaction.value }}
        </div>
        <div>
          <label><strong>origin:</strong></label> {{ currentTransaction.origin }}
        </div>
          <label><strong>kind:</strong></label> {{ currentTransaction.kind }}
        </div>
          <label><strong>date:</strong></label> {{ currentTransaction.date }}
        <div>
        </div>

        <a
          class="badge badge-warning"
          :href="'/transactions/' + currentTransaction.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
  </div>


</template>
