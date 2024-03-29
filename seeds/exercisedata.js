/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(`exercise-data`).del();
  await knex(`exercise-data`).insert([
    //ARMS
    {
      id: 'd6d1c8ae-7543-4056-b29f-27bbd7fbbc4b',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 55,
      set_1: 6,
      set_2: 6,
      set_3: 6,
      training_volume: 990,
      date: '2023-04-01',
    },
    {
      id: 'b609cd70-19a6-4579-9979-f636e7dddf11',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 35,
      set_1: 8,
      set_2: 6,
      set_3: 5,
      training_volume: 665,
      date: '2023-04-01',
    },
    {
      id: '17ee531f-4d0e-4f79-aa9e-42df6b87c348',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 25,
      set_1: 8,
      set_2: 7,
      set_3: 7,
      training_volume: 550,
      date: '2023-04-01',
    },
    {
      id: '214e5b31-33fd-4938-ae8f-1e31b0f06489',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 30,
      set_1: 7,
      set_2: 7,
      set_3: 7,
      training_volume: 630,
      date: '2023-04-01',
    },
    {
      id: '1bbef6e8-5816-4740-b032-cc789fb85b5e',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 20,
      set_1: 9,
      set_2: 9,
      set_3: 8,
      training_volume: 520,
      date: '2023-04-01',
    },
    {
      id: 'dd52c1b6-bbd1-4132-a923-9af4b393b255',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '62d123fc-3ab5-44a9-a594-c57a9e3b533c',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 15,
      set_1: 12,
      set_2: 10,
      set_3: 10,
      training_volume: 480,
      date: '2023-04-01',
    },
    // Workout 1 - Arms, Date 2
    {
      id: 'dc715a69-0bbf-48c6-9d82-55351e6e7613',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 60,
      set_1: 5,
      set_2: 5,
      set_3: 5,
      training_volume: 900,
      date: '2023-04-02',
    },
    {
      id: '4ee608ea-c79a-47c8-b78e-bd6bc7ac41e1',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 40,
      set_1: 7,
      set_2: 6,
      set_3: 6,
      training_volume: 760,
      date: '2023-04-02',
    },
    {
      id: '24b0a3e2-64d3-4d2a-ade7-0d6385eae5c6',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 30,
      set_1: 7,
      set_2: 7,
      set_3: 7,
      training_volume: 630,
      date: '2023-04-02',
    },
    {
      id: 'e3398235-bf52-4e12-bf07-2e8f9873c771',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 35,
      set_1: 6,
      set_2: 6,
      set_3: 6,
      training_volume: 630,
      date: '2023-04-02',
    },
    {
      id: '2a369377-0bdc-4fb8-be91-7142cc6aa020',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 25,
      set_1: 8,
      set_2: 8,
      set_3: 7,
      training_volume: 575,
      date: '2023-04-02',
    },
    {
      id: '95b706c0-e864-4ddc-8a45-85612afff0d0',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '62d123fc-3ab5-44a9-a594-c57a9e3b533c',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 20,
      set_1: 10,
      set_2: 10,
      set_3: 9,
      training_volume: 580,
      date: '2023-04-02',
    },
    {
      id: '9a75dc2d-3c70-43e1-a25b-acfd24fd5200',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 55,
      set_1: 6,
      set_2: 6,
      set_3: 6,
      training_volume: 990,
      date: '2023-04-03',
    },
    {
      id: '232ba34c-38ef-4cb1-8295-f04da7a68923',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 35,
      set_1: 8,
      set_2: 6,
      set_3: 5,
      training_volume: 665,
      date: '2023-04-03',
    },
    {
      id: '79b2fb3c-ff40-479c-89c8-a06edfc70c55',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 25,
      set_1: 8,
      set_2: 7,
      set_3: 7,
      training_volume: 550,
      date: '2023-04-03',
    },
    {
      id: '0bbabba6-441c-4a64-b928-e69668f0d8cf',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 30,
      set_1: 6,
      set_2: 6,
      set_3: 6,
      training_volume: 540,
      date: '2023-04-03',
    },
    {
      id: 'b69a723d-9d96-4754-85ce-d62ad6a1cf8e',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 20,
      set_1: 10,
      set_2: 10,
      set_3: 9,
      training_volume: 580,
      date: '2023-04-03',
    },
    {
      id: 'e00fbad8-6858-4009-9aa6-57faa55ebb43',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '62d123fc-3ab5-44a9-a594-c57a9e3b533c',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 20,
      set_1: 10,
      set_2: 10,
      set_3: 9,
      training_volume: 580,
      date: '2023-04-03',
    },
    {
      id: '4fd43ace-e731-4e36-9706-06f21a67abf8',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 50,
      set_1: 6,
      set_2: 5,
      set_3: 6,
      training_volume: 850,
      date: '2023-04-04',
    },
    {
      id: 'ba711848-1b1c-4ae0-96e9-a34940e25148',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 30,
      set_1: 8,
      set_2: 5,
      set_3: 5,
      training_volume: 540,
      date: '2023-04-04',
    },
    {
      id: '0e0b6c39-3088-447b-8f74-dd9acf3649dd',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 20,
      set_1: 8,
      set_2: 6,
      set_3: 7,
      training_volume: 420,
      date: '2023-04-04',
    },
    {
      id: '65555286-dd19-4b89-9e35-b906797e424d',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 25,
      set_1: 6,
      set_2: 6,
      set_3: 6,
      training_volume: 450,
      date: '2023-04-04',
    },
    {
      id: 'a6fa0880-47a0-4927-abff-3766d1ff3cb2',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 20,
      set_1: 10,
      set_2: 9,
      set_3: 8,
      training_volume: 540,
      date: '2023-04-04',
    },
    {
      id: 'fe1ace3b-9393-4a56-845c-2c815cece925',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '62d123fc-3ab5-44a9-a594-c57a9e3b533c',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 20,
      set_1: 10,
      set_2: 10,
      set_3: 9,
      training_volume: 580,
      date: '2023-04-04',
    },
    {
      id: '0601f9f6-a1bc-42ce-b65a-ac219b2a906d',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 45,
      set_1: 5,
      set_2: 5,
      set_3: 5,
      training_volume: 675,
      date: '2023-04-05',
    },
    {
      id: '6cd931f3-aa19-481e-9944-73d129f2b6da',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 35,
      set_1: 7,
      set_2: 6,
      set_3: 6,
      training_volume: 665,
      date: '2023-04-05',
    },
    {
      id: '5b9ee576-4e30-463d-9956-6ff34b4d3244',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 15,
      set_1: 8,
      set_2: 8,
      set_3: 7,
      training_volume: 345,
      date: '2023-04-05',
    },
    {
      id: '2f2e6d37-8de9-436a-90bc-878df27a50db',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 20,
      set_1: 6,
      set_2: 7,
      set_3: 6,
      training_volume: 380,
      date: '2023-04-05',
    },
    {
      id: '75c5f380-1435-4bb3-a419-b2797d00fab2',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 15,
      set_1: 9,
      set_2: 8,
      set_3: 7,
      training_volume: 360,
      date: '2023-04-05',
    },
    {
      id: 'c4570478-95e0-4bcd-ae3c-637b48c9fe10',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '62d123fc-3ab5-44a9-a594-c57a9e3b533c',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      weight_lbs: 25,
      set_1: 7,
      set_2: 6,
      set_3: 7,
      training_volume: 500,
      date: '2023-04-05',
    },


    //LEGS
    {
      id: 'c5fc17b3-1487-44e5-ae5c-d63df947b961',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'c5fc17b3-1487-44e5-ae5c-d63df947b961',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 180,
      set_1: 10,
      set_2: 10,
      set_3: 10,
      training_volume: 5400,
      date: '2023-03-29',
    },
    {
      id: 'faa7180c-b2f0-4e1b-a8f7-0e7ba583ad5b',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'faa7180c-b2f0-4e1b-a8f7-0e7ba583ad5b',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 135,
      set_1: 8,
      set_2: 8,
      set_3: 8,
      training_volume: 3240,
      date: '2023-03-29',
    },
    {
      id: '83410ecc-0df0-4d05-900b-2dd7bde6e6ee',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '83410ecc-0df0-4d05-900b-2dd7bde6e6ee',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 80,
      set_1: 12,
      set_2: 12,
      set_3: 12,
      training_volume: 2880,
      date: '2023-03-29',
    },
    {
      id: 'a3f65973-9b31-4e98-a9d1-858a20e1e192',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a3f65973-9b31-4e98-a9d1-858a20e1e192',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 90,
      set_1: 10,
      set_2: 10,
      set_3: 10,
      training_volume: 2700,
      date: '2023-03-29',
    },
    {
      id: 'b68d46ad-f64b-42e3-b7a9-717d0c807541',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'b68d46ad-f64b-42e3-b7a9-717d0c807541',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 50,
      set_1: 15,
      set_2: 15,
      set_3: 15,
      training_volume: 2250,
      date: '2023-03-29',
    },
    {
      id: '2a07c8e0-72f9-4a6e-b686-b597b2717f84',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'c5fc17b3-1487-44e5-ae5c-d63df947b961',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 200,
      set_1: 8,
      set_2: 8,
      set_3: 8,
      training_volume: 4800,
      date: '2023-03-30',
    },
    {
      id: 'dce8f402-d0c5-4398-b7e7-5c6b1be15ff7',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'faa7180c-b2f0-4e1b-a8f7-0e7ba583ad5b',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 140,
      set_1: 10,
      set_2: 10,
      set_3: 10,
      training_volume: 4200,
      date: '2023-03-30',
    },
    {
      id: 'cd5f1e9a-2533-4b29-90c7-911c1f92c3d4',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '83410ecc-0df0-4d05-900b-2dd7bde6e6ee',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 85,
      set_1: 12,
      set_2: 12,
      set_3: 12,
      training_volume: 3060,
      date: '2023-03-30',
    },
    {
      id: '6ac420a4-2a2c-4f83-bbe9-2ea54db3a699',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a3f65973-9b31-4e98-a9d1-858a20e1e192',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 95,
      set_1: 8,
      set_2: 8,
      set_3: 8,
      training_volume: 2280,
      date: '2023-03-30',
    },
    {
      id: '0a18927e-4a92-42f0-b8f5-5a7e70312af4',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'b68d46ad-f64b-42e3-b7a9-717d0c807541',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 55,
      set_1: 15,
      set_2: 15,
      set_3: 15,
      training_volume: 2475,
      date: '2023-03-30',
    },
    {
      id: 'dbe8f9ab-36dd-4c84-9ed4-67e647d860f3',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'c5fc17b3-1487-44e5-ae5c-d63df947b961',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 190,
      set_1: 8,
      set_2: 8,
      set_3: 8,
      training_volume: 4560,
      date: '2023-04-06',
    },
    {
      id: 'f1cd1b0b-24a4-4c6f-bf82-0b3ed222f4a2',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'faa7180c-b2f0-4e1b-a8f7-0e7ba583ad5b',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 135,
      set_1: 10,
      set_2: 10,
      set_3: 10,
      training_volume: 4050,
      date: '2023-04-06',
    },
    {
      id: 'e6c08e47-25ac-4d3d-bc7b-45c61b34625c',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '83410ecc-0df0-4d05-900b-2dd7bde6e6ee',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 90,
      set_1: 12,
      set_2: 12,
      set_3: 12,
      training_volume: 3240,
      date: '2023-04-06',
    },
    {
      id: 'fba7f342-1b14-43b7-8db4-7a3ccf9cb0e2',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a3f65973-9b31-4e98-a9d1-858a20e1e192',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 100,
      set_1: 8,
      set_2: 8,
      set_3: 8,
      training_volume: 2400,
      date: '2023-04-06',
    },
    {
      id: 'e158772f-70cc-486e-9df5-64b4f3e7226d',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'b68d46ad-f64b-42e3-b7a9-717d0c807541',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 50,
      set_1: 15,
      set_2: 15,
      set_3: 15,
      training_volume: 2250,
      date: '2023-04-06',
    },
    {
      id: '11adcb94-9b2e-4a1b-b24e-d9b4310f2c77',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'c5fc17b3-1487-44e5-ae5c-d63df947b961',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 200,
      set_1: 8,
      set_2: 8,
      set_3: 8,
      training_volume: 4800,
      date: '2023-04-07',
    },
    {
      id: 'f360df0e-1a2e-4e79-8d9b-20ef101a3d2d',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'faa7180c-b2f0-4e1b-a8f7-0e7ba583ad5b',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 145,
      set_1: 10,
      set_2: 10,
      set_3: 10,
      training_volume: 4350,
      date: '2023-04-07',
    },
    {
      id: '83f04a9a-470b-4293-9df4-9fdd12e2a8ae',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '83410ecc-0df0-4d05-900b-2dd7bde6e6ee',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 100,
      set_1: 12,
      set_2: 12,
      set_3: 12,
      training_volume: 3600,
      date: '2023-04-07',
    },
    {
      id: '40f3aaf7-21be-4e7f-96f9-3e3acda9ef8a',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a3f65973-9b31-4e98-a9d1-858a20e1e192',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 105,
      set_1: 8,
      set_2: 8,
      set_3: 8,
      training_volume: 2520,
      date: '2023-04-07',
    },
    {
      id: '1e745d7a-5dd7-4a6d-9a4c-8c2e17325c57',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'b68d46ad-f64b-42e3-b7a9-717d0c807541',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 55,
      set_1: 15,
      set_2: 15,
      set_3: 15,
      training_volume: 2475,
      date: '2023-04-07',
    },
    {
      id: '654dc28e-8f91-43f1-ba02-9a5f4d2f8f29',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'c5fc17b3-1487-44e5-ae5c-d63df947b961',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 210,
      set_1: 8,
      set_2: 8,
      set_3: 8,
      training_volume: 5040,
      date: '2023-04-09',
    },
    {
      id: '19d7b02d-2b5d-41da-9779-2f40a894a43c',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'faa7180c-b2f0-4e1b-a8f7-0e7ba583ad5b',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 150,
      set_1: 10,
      set_2: 10,
      set_3: 10,
      training_volume: 4500,
      date: '2023-04-09',
    },
    {
      id: '824e8f5b-6b46-4dc9-9481-2635a2c6d82a',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '83410ecc-0df0-4d05-900b-2dd7bde6e6ee',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 110,
      set_1: 12,
      set_2: 12,
      set_3: 12,
      training_volume: 3960,
      date: '2023-04-09',
    },
    {
      id: '3438f1c0-2b1e-4988-9a66-892a5ff2fe2e',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a3f65973-9b31-4e98-a9d1-858a20e1e192',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 110,
      set_1: 8,
      set_2: 8,
      set_3: 8,
      training_volume: 2640,
      date: '2023-04-09',
    },
    {
      id: 'e47e1f5a-7183-4d49-b60d-49ae9e8f8657',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'b68d46ad-f64b-42e3-b7a9-717d0c807541',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      weight_lbs: 60,
      set_1: 15,
      set_2: 15,
      set_3: 15,
      training_volume: 2700,
      date: '2023-04-09',
    },
    //Chest/back(mid back)
    {
      id: 'a0938035-ca00-4c48-834c-62ef17f6829a',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a0938035-ca00-4c48-834c-62ef17f6829a',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 135,
      set_1: 10,
      set_2: 10,
      set_3: 10,
      training_volume: 4050,
      date: '2023-04-10',
    },
    {
      id: '312f3444-7476-40ea-b982-500e00d936af',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '312f3444-7476-40ea-b982-500e00d936af',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 160,
      set_1: 6,
      set_2: 6,
      set_3: 6,
      training_volume: 2880,
      date: '2023-04-10',
    },
    {
      id: 'ef0272ed-3adc-4ae9-907a-eaa899c921e0',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'ef0272ed-3adc-4ae9-907a-eaa899c921e0',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 30,
      set_1: 15,
      set_2: 15,
      set_3: 15,
      training_volume: 1350,
      date: '2023-04-10',
    },
    {
      id: '5fa1b53f-9768-4b19-9c67-e9612241a60d',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '5fa1b53f-9768-4b19-9c67-e9612241a60d',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 185,
      set_1: 8,
      set_2: 8,
      set_3: 8,
      training_volume: 4440,
      date: '2023-04-10',
    },
    {
      id: '8705e6c0-0da4-43da-be60-c64a1915c572',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '8705e6c0-0da4-43da-be60-c64a1915c572',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 95,
      set_1: 12,
      set_2: 12,
      set_3: 12,
      training_volume: 3420,
      date: '2023-04-10',
    },
    {
      id: 'a6ceeeb4-fa14-41be-a097-24fd78facd1c',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a6ceeeb4-fa14-41be-a097-24fd78facd1c',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 40,
      set_1: 12,
      set_2: 12,
      set_3: 12,
      training_volume: 1440,
      date: '2023-04-10',
    },
    {
      id: 'e2e7f7af-3469-4c39-a00f-12af7c348875',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a0938035-ca00-4c48-834c-62ef17f6829a',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 145,
      set_1: 8,
      set_2: 8,
      set_3: 8,
      training_volume: 3480,
      date: '2023-04-11',
    },
    {
      id: 'ee98a32b-2c47-4c4e-9079-8095d4c07f15',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '312f3444-7476-40ea-b982-500e00d936af',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 140,
      set_1: 8,
      set_2: 8,
      set_3: 8,
      training_volume: 3360,
      date: '2023-04-11',
    },
    {
      id: '03ebf68c-4d81-4f33-8a1d-2d7b61b21b36',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'ef0272ed-3adc-4ae9-907a-eaa899c921e0',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 35,
      set_1: 12,
      set_2: 12,
      set_3: 12,
      training_volume: 1260,
      date: '2023-04-11',
    },
    {
      id: 'af5dfc5e-2dd1-4193-8ef7-d4d8e4c1d22e',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '5fa1b53f-9768-4b19-9c67-e9612241a60d',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 195,
      set_1: 6,
      set_2: 6,
      set_3: 6,
      training_volume: 3510,
      date: '2023-04-11',
    },
    {
      id: '73b38ea0-f7e3-4a20-b6b1-26c34d7d2035',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '8705e6c0-0da4-43da-be60-c64a1915c572',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 105,
      set_1: 10,
      set_2: 10,
      set_3: 10,
      training_volume: 3150,
      date: '2023-04-11',
    },
    {
      id: 'a3e28c07-d74a-4ebe-85fb-10efee71efea',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a6ceeeb4-fa14-41be-a097-24fd78facd1c',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 50,
      set_1: 12,
      set_2: 12,
      set_3: 12,
      training_volume: 1800,
      date: '2023-04-11',
    },
    {
      id: '5e3b5b72-20d3-4fe4-bc7d-642d8956829d',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a0938035-ca00-4c48-834c-62ef17f6829a',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 150,
      set_1: 8,
      set_2: 8,
      set_3: 8,
      training_volume: 3600,
      date: '2023-04-15',
    },
    {
      id: 'b6a2b2a7-512f-4c15-92a5-477abfbb7f54',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '312f3444-7476-40ea-b982-500e00d936af',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 140,
      set_1: 10,
      set_2: 10,
      set_3: 10,
      training_volume: 4200,
      date: '2023-04-15',
    },
    {
      id: 'f6a3ce3f-1d37-4f01-84b1-8f0a5e3daef6',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'ef0272ed-3adc-4ae9-907a-eaa899c921e0',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 40,
      set_1: 12,
      set_2: 12,
      set_3: 12,
      training_volume: 1440,
      date: '2023-04-15',
    },
    {
      id: '3c36f4a4-d3fb-47a0-b0a7-56f1b5a29c6d',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '5fa1b53f-9768-4b19-9c67-e9612241a60d',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 200,
      set_1: 6,
      set_2: 6,
      set_3: 6,
      training_volume: 3600,
      date: '2023-04-15',
    },
    {
      id: '3667fcde-7973-4e5a-9969-4e7d7b67488f',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '8705e6c0-0da4-43da-be60-c64a1915c572',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 110,
      set_1: 10,
      set_2: 10,
      set_3: 10,
      training_volume: 3300,
      date: '2023-04-15',
    },
    {
      id: '32e71bde-ec3e-45df-bc06-2a176e38f994',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a6ceeeb4-fa14-41be-a097-24fd78facd1c',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 55,
      set_1: 12,
      set_2: 12,
      set_3: 12,
      training_volume: 1980,
      date: '2023-04-15',
    },
    {
      id: '81f03dd0-cc62-43e4-9fcf-9f66f854d06e',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a0938035-ca00-4c48-834c-62ef17f6829a',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 165,
      set_1: 8,
      set_2: 10,
      set_3: 12,
      training_volume: 4950,
      date: '2023-04-28',
    },
    {
      id: '59a74a02-53c0-4aee-b781-3c2eb2c36c8f',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '312f3444-7476-40ea-b982-500e00d936af',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 155,
      set_1: 10,
      set_2: 12,
      set_3: 8,
      training_volume: 4650,
      date: '2023-04-28',
    },
    {
      id: 'dbfd2254-0b9e-4ae1-964f-2b8b86a5d081',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'ef0272ed-3adc-4ae9-907a-eaa899c921e0',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 50,
      set_1: 12,
      set_2: 10,
      set_3: 8,
      training_volume: 1500,
      date: '2023-04-28',
    },
    {
      id: '74014a7f-4c9e-4f80-9f2d-fc6a09a8a9ed',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '5fa1b53f-9768-4b19-9c67-e9612241a60d',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 210,
      set_1: 6,
      set_2: 8,
      set_3: 10,
      training_volume: 5040,
      date: '2023-04-28',
    },
    {
      id: 'd8dbd4c0-5a02-4cc7-9e33-1672762345e0',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '8705e6c0-0da4-43da-be60-c64a1915c572',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 120,
      set_1: 10,
      set_2: 12,
      set_3: 10,
      training_volume: 3840,
      date: '2023-04-28',
    },
    {
      id: 'b9c4ff10-7ed6-42a9-bdcb-bd8d59d50d37',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a6ceeeb4-fa14-41be-a097-24fd78facd1c',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      weight_lbs: 55,
      set_1: 12,
      set_2: 10,
      set_3: 8,
      training_volume: 1650,
      date: '2023-04-28',
    },
    //chest/back(lats)
    {
      id: '7e079647-1e3f-45b1-8a25-76d7a4e8c56a',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a0938035-ca00-4c48-834c-62ef17f6829a',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 60,
      set_1: 12,
      set_2: 10,
      set_3: 8,
      training_volume: 1800,
      date: '2023-05-02',
    },
    {
      id: '6a345d07-7d4d-4d1f-b7f2-bd891be8ef19',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '312f3444-7476-40ea-b982-500e00d936af',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 25,
      set_1: 15,
      set_2: 12,
      set_3: 10,
      training_volume: 925,
      date: '2023-05-02',
    },
    {
      id: 'd9ef0b55-1953-4f8d-8d7d-b468fdcbcd5f',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'ef0272ed-3adc-4ae9-907a-eaa899c921e0',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 40,
      set_1: 12,
      set_2: 10,
      set_3: 8,
      training_volume: 1200,
      date: '2023-05-02',
    },
    {
      id: 'd4f5c414-93a3-4f25-a11c-7f222858a3e5',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'e43ba249-664b-4637-ba55-40672e3e7a9d',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 80,
      set_1: 10,
      set_2: 8,
      set_3: 6,
      training_volume: 1920,
      date: '2023-05-02',
    },
    {
      id: 'fbbd10ad-3ab0-4c2b-88d5-4dbf1bb6b249',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '0272486c-95e3-4405-90c3-cb495bd229a9',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 30,
      set_1: 15,
      set_2: 12,
      set_3: 10,
      training_volume: 1110,
      date: '2023-05-02',
    },
    {
      id: 'a30f37e6-1985-4f84-bec5-8d8b8883f16f',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a0938035-ca00-4c48-834c-62ef17f6829a',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 65,
      set_1: 12,
      set_2: 10,
      set_3: 8,
      training_volume: 1950,
      date: '2023-05-05',
    },
    {
      id: 'b489d04d-5a11-4a3f-b9f3-3926a19056c2',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '312f3444-7476-40ea-b982-500e00d936af',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 27,
      set_1: 15,
      set_2: 12,
      set_3: 10,
      training_volume: 999,
      date: '2023-05-05',
    },
    {
      id: 'dc48b370-603b-4ce7-b36d-146d9a402db9',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'ef0272ed-3adc-4ae9-907a-eaa899c921e0',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 42,
      set_1: 12,
      set_2: 10,
      set_3: 8,
      training_volume: 1260,
      date: '2023-05-05',
    },
    {
      id: '9f934be4-6baf-4b38-a4e5-81a327dab25f',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'e43ba249-664b-4637-ba55-40672e3e7a9d',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 82,
      set_1: 10,
      set_2: 8,
      set_3: 6,
      training_volume: 1968,
      date: '2023-05-05',
    },
    {
      id: 'ef7033c9-c157-40f1-a1db-d5e21b4c8f37',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '0272486c-95e3-4405-90c3-cb495bd229a9',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 32,
      set_1: 15,
      set_2: 12,
      set_3: 10,
      training_volume: 1184,
      date: '2023-05-05',
    },
    {
      id: '5d1e00bb-c8ec-4971-ab18-214885652b27',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a0938035-ca00-4c48-834c-62ef17f6829a',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 135,
      set_1: 8,
      set_2: 6,
      set_3: 4,
      training_volume: 2430,
      date: '2023-05-12',
    },
    {
      id: '6d5aa51e-60fa-4398-aeed-a9a59ba3869d',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '312f3444-7476-40ea-b982-500e00d936af',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 85,
      set_1: 12,
      set_2: 10,
      set_3: 8,
      training_volume: 2550,
      date: '2023-05-12',
    },
    {
      id: '9110c2b5-9c17-4ba4-8b20-1999f6987ff2',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'ef0272ed-3adc-4ae9-907a-eaa899c921e0',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 70,
      set_1: 12,
      set_2: 10,
      set_3: 8,
      training_volume: 2100,
      date: '2023-05-12',
    },
    {
      id: 'c9a0fb9b-6a79-4757-a346-4537953c8463',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'e43ba249-664b-4637-ba55-40672e3e7a9d',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 155,
      set_1: 6,
      set_2: 4,
      set_3: 2,
      training_volume: 1860,
      date: '2023-05-12',
    },
    {
      id: '71d4ccbf-9b5a-4e8e-b4dd-c776ce2c6cc7',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '0272486c-95e3-4405-90c3-cb495bd229a9',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 95,
      set_1: 12,
      set_2: 10,
      set_3: 8,
      training_volume: 2850,
      date: '2023-05-12',
    },
    {
      id: 'f0b4cbae-3877-46fc-ba79-49edb458a11b',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'a0938035-ca00-4c48-834c-62ef17f6829a',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 140,
      set_1: 10,
      set_2: 8,
      set_3: 6,
      training_volume: 3360,
      date: '2023-06-05',
    },
    {
      id: '73909e29-5e24-4e4b-b721-29a258df8fe6',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '312f3444-7476-40ea-b982-500e00d936af',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 90,
      set_1: 12,
      set_2: 10,
      set_3: 8,
      training_volume: 2700,
      date: '2023-06-05',
    },
    {
      id: '5378103d-8a7d-467e-ab6e-65ab670cd42a',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'ef0272ed-3adc-4ae9-907a-eaa899c921e0',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 75,
      set_1: 12,
      set_2: 10,
      set_3: 8,
      training_volume: 2250,
      date: '2023-06-05',
    },
    {
      id: '24440c91-b28d-4abe-a7cf-e018d5ecc286',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: 'e43ba249-664b-4637-ba55-40672e3e7a9d',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 160,
      set_1: 6,
      set_2: 4,
      set_3: 2,
      training_volume: 1920,
      date: '2023-06-05',
    },
    {
      id: '72e9f87b-4166-49ef-8ccb-26cdc93cd0e1',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
      exercise_id: '0272486c-95e3-4405-90c3-cb495bd229a9',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      weight_lbs: 100,
      set_1: 12,
      set_2: 10,
      set_3: 8,
      training_volume: 3000,
      date: '2023-06-05',
    },
  ]);
};