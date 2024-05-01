import { defineStore } from "pinia";
import cloneDeep from "lodash.clonedeep";
import axios from "axios";

const useWeaponStore = defineStore('weapon', {
    state: ()=>({
        weapon:null,
        weapons: []
    }),
    getters: {
        totalWeapons: (state) => state.weapons.length
    },
    actions: {
        async getAllWeapons(){
            try{
                const response = await axios.get(`/weapons/`)
                this.$patch({ weapons: cloneDeep(response.data)})
                console.log(this.weapons)
            } catch (err){
                console.log(err);
            }
        },
        async getWeapon(id){
            try{
                const response = await axios.get(`/weapons/${id}`)
                this.$patch({ weapon: cloneDeep(response.data) })
            } catch (err){
                console.log(err)
            }
        }
    }
})

export { useWeaponStore }

