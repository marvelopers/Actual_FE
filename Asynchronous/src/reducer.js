const initialState = {
  regions: [],
  categories: [],
  selectedRegion: null,
  selectedCategory: null,
};

function equal(key, value) {
  return (obj) => {
    return obj[key] === value;
  };
}

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },
  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },
  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },
  selectRegion(state, { payload: { regionId } }) {
    const { regions } = state;

    return {
      ...state,
      selectedRegion: regions.find(equal("id", regionId)),
      //equal 함수가 값을 반환 하지 않고 있었어요 => {값} 가 아니라 => 값 또는 =>{return 값} 으로 처리되었어야 해요
    };
  },
  selectCategory(state, { payload: { categoryId } }) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find(equal("id", categoryId)),
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
