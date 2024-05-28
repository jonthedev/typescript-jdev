interface StoreData<T = any> {
  data: T[]
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4]
}

const randomStuff: StoreData = {
  data: ["random", 1]
}

// * ----------------------------
// data is located in the data property
