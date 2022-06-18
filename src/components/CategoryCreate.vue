<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>{{ "Create" | localize }}</h4>
      </div>

      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input
            id="name"
            type="text"
            v-model="title"
            :class="{ invalid: $v.title.$dirty && !$v.title.required }"
          />
          <label for="name">{{ "Title" | localize }}</label>
          <span
            v-if="$v.title.$dirty && !$v.title.required"
            class="helper-text invalid"
          >
            {{ "Message_CategoryTitle" | localize }}
          </span>
        </div>

        <div class="input-field">
          <input
            id="limit"
            type="number"
            v-model.number="limit"
            :class="{ invalid: $v.limit.$dirty && !$v.limit.required }"
          />
          <label for="limit">{{ "Limit" | localize }}</label>
          <span
            v-if="$v.limit.$dirty && !$v.limit.required"
            class="helper-text invalid"
          >
            {{ "Message_MinLength" | localize
            }}{{ $v.limit.$params.minValue.min }}
          </span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          {{ "Create" | localize }}
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import localizeFilter from "../filters/locaize.filter";
import { required, minValue } from "vuelidate/lib/validators";
import M from "materialize-css";

export default {
  data: () => ({
    title: "",
    limit: 100,
  }),
  validations: {
    title: { required },
    limit: { minValue: minValue(100) },
  },
  mounted() {
    M.updateTextFields();
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      try {
        /* eslint-disable no-unused-vars */
        const category = await this.$store.dispatch("createCategory", {
          title: this.title,
          limit: this.limit,
        });
        this.title = "";
        this.limit = 100;
        this.$v.$reset();
        this.$message(localizeFilter("Category_HasBeenCreated"));
        this.$emit("created", category);
        // eslint-disable-next-line no-empty
      } catch (e) {}
    },
  },
};
</script>
