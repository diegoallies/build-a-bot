<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in Cart" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            {{formattedCost}}
          </td>
        </tr>
      </tbody>
    </table>
    <h2 class="saleItems">You saved money on these robots:</h2>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in ProductCartSaleItems" :key="index">
          <td class="robot-title">
            {{robot.head.title}}
          </td>
          <td class="cost">
            {{formattedCost}}
          </td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    Cart() {
      return this.$store.state.robots.Cart;
    },
    ProductCartSaleItems() {
      return this.$store.getters['robots/ProductCartSaleItems'];
    },
    formattedCost() {
    return '£' + this.robot.cost.toFixed(2);
  }
  },
};
</script>

<style scoped>
  td, th {
    padding: 5px;
  }
  .robot-title {
    text-align: left;
    padding-right: 200px;
  }
  .cost {
    text-align: right;
  }
  .saleItems {
    margin-top: 50px;
    font-size: 18px;
    color: red;
  }
</style>
