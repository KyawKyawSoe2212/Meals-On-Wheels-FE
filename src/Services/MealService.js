import axios from 'axios'

class MealService{
    viewAllMeals(){
        return axios.get("http://localhost:8080/api/meals")
    }
}
export default new MealService