<template>
    <div class="wrapper">
        <div class="container card" id="formContainer">
            <div class="row">
                <div class="col-12">
                    <h3>Registro de nuevo artículo</h3>
                </div>
            </div>
            <div class="lineSpacing"><hr></div>
            <div class="lineSpacing1em"></div>
            <form>
                <label for="radioOpts">Seleccione su artículo: </label>
                <div class="row formItem" id="radioOpts">
                    <div class="col-6">
                        <input type="radio" id="bikeOpt" class="option-input radio" name="rad" value="bike" v-model="option">
                        <div class="row">
                            <div class="col-12">
                                <label for="bikeOpt">Bicicleta</label>
                            </div>
                        </div>
                    </div>

                    <div class="col-6">
                        <input type="radio" id="helmOpt" class="option-input radio" name="rad" value="helm" v-model="option">
                        <div class="row">
                            <div class="col-12">
                                <label for="helmOpt">Casco</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="spacing2em"></div>
                <div class="row">
                    <div class="col-12" v-if="option === 'bike'">
                        <label for="bikeList">Seleccione la marca de su bicicleta:</label>
                        <div class="lineSpacing1em"></div>
                        <select class="form-control" id="bikeList" v-model="bikeBrand">
                            <option v-for="(brand, index) in brands" :key="index" :value="brand">{{brand}}</option>
                        </select>
                        <div class="lineSpacing2em"></div>

                        <div class="row">
                            <FormBikeSection :models="models[`${bikeBrand}`] || []"></FormBikeSection>
                        </div>
                        <label for="priceB">Precio de su producto:</label>
                        <div class="lineSpacing"></div>
                        <input class="form-control" id="priceB" type="text" v-model="priceB" autocomplete="disabled" required>
                        <div v-if="priceB > 1500"><p class="priceWarn">*Productos similares se han vendido con un precio medio de 1250€</p></div>

                        <label for="correoE">Correo Electrónico:</label>
                        <div class="lineSpacing"></div>
                        <input class="form-control" type="email" id="correoE" required>


                    </div>

                    <div class="col-12" v-if="option === 'helm'">
                        <label for="helmList">Seleccione la marca de su casco: </label>
                        <br>
                        <select class="form-control" id="helmList" v-model="helmModel">
                            <option value="Uvex">Uvex</option>
                            <option value="Specialized">Specialized</option>
                            <option value="POC">POC</option>
                            <option value="Garneau">Garneau</option>
                            <option value="Bontrager">Bontrager</option>
                        </select>
                        <div class="lineSpacing2em"></div>
                        <label for="fileUp">Seleccione Imágenes del producto (Min 1 - Máx 3):</label>
                        <div class="uploadFileBtn">
                            <input class="form-control" type="file" id="fileUp" name="helmFile" multiple data-multiple-caption="" required/>
                            <label for="fileUp"><span></span></label>
                        </div>

                        <div class="lineSpacing"></div>

                        <label for="priceH">Precio de su producto:</label>
                        <div class="lineSpacing"></div>
                        <input class="form-control" id="priceH" type="text" v-model="priceH" autocomplete="disabled" required>
                        <div v-if="priceH > 800"><p class="priceWarn">*Productos similares se han vendido con un precio medio de 750€</p></div>

                        <div class="lineSpacing2em"></div>

                        <label for="correoE">Correo Electrónico:</label>
                        <div class="lineSpacing"></div>
                        <input class="form-control" type="email" id="correoE" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div v-if="option !== ''">
                            <button type="submit" class="btn btn-info" style="margin-top: 1em" name="sendForm">Registrar Artículo</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>


<script>
    import FormBikeSection from './FormBikeSection'
    export default {
        name: "fields",

        data (){
            return{
                models: {
                    Merida: ['Reacto', 'Scultura', 'Big Nine', 'Otro modelo'],
                    Giant: ['XTC', 'Reign', 'Talon', 'Otro modelo'],
                    Trek: ['Top Fuel', 'Superfly', 'Fuel Ex', 'Otro modelo']
                },
                brands: ['Merida', 'Giant', 'Trek'],
                option: '',
                bikeBrand: '',
                bikeModel: '',
                helmModel: '',
                damageRange: '',
                priceH: '',
                priceB: ''
            }
        },
        methods: {

        },

        components: {
            FormBikeSection
        }
    }
</script>


<style>

</style>