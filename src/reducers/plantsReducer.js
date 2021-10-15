const initialState = {
  plants: [
    {
      id: 1,
      nickname: "Test Nickname",
      species: "Test Species",
      h20Frequency: "daily",
      image:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ab/43d910ae7d11e88e82d728f9399c9e/plant_Profile_logo.jpg?auto=format%2Ccompress&dpr=1",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
