<template>
    <div class="col-12">
        <label for="bikeModelList">Seleccione su Modelo:</label>
        <select class="form-control" id="bikeModelList" v-model="bikeModel">
            <option v-for="(model, index) in models" :key="index" :value="model">{{model}}</option>
        </select>
        <div class="lineSpacing1em"></div>
        <div v-if="bikeModel === 'Otro modelo'">
            <label for="otherModel">Escriba el nombre del modelo:</label>
            <div class="lineSpacing"></div>
            <input class="form-control" type="text" id="otherModel" placeholder="Modelo (Ej: Scultura)">
        </div>
        <div class="lineSpacing1em"></div>
        <label for="damageRate">Estado de la Bicicleta:</label>
        <div class="lineSpacing"></div>
        <div>{{`${damageRange}: ${damageRateText}`}}</div>
        <input id="damageRate" type="range" min="0" max="4" step="1" v-model="damageRange">
        <div class="lineSpacing1em"></div>
        <label for="fileUp">Imágenes del producto (Min 1 - Máx 3):</label>
        <div class="uploadFileBtn">
            <input type="file" id="fileUp"  class="form-control" name="helmFile" multiple data-multiple-caption="" required/>
            <label for="fileUp"><span></span></label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "form-bike-section",

        data (){
            return {
                bikeModel: '',
                damageRange: 0
            }
        },

        computed: {
            damageRateText () {
                const damageStatus = ['Completamente Nueva', 'Muy poco uso', 'Usada', 'Bastante usada', 'Puede necesitar repuestos'];
                return damageStatus[this.damageRange]
            }
        },

        methods: {

        },

        props: {
            models: {
                type: Array,
                required: true
            }
        }
    }
</script>