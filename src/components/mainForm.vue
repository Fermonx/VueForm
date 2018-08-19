<template>
    <div class="wrapper">
        <div class="container card" id="formContainer">
            <div class="row">
                <div class="col-12">
                    <h3>Registrar Artículo Nuevo</h3>
                </div>
            </div>
            <div class="lineSpacing"><hr></div>
            <div class="lineSpacing1em"></div>
            <form action="https://getsimpleform.com/messages?form_api_token=6787504ffdec4365054fbc23ccf5eb16" method="post">
                <label for="radioOpts">Seleccione su artículo: </label>
                <div class="row formRadio" id="radioOpts">
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
                        <label for="bikeList">Marca de su bicicleta:</label>
                        <div class="lineSpacing1em"></div>
                        <select class="form-control" id="bikeList" v-model="bikeBrand">
                            <option v-for="(brand, index) in brands" :key="index" :value="brand">{{brand}}</option>
                        </select>
                        <div class="lineSpacing2em"></div>

                        <div class="row">
                            <FormBikeSection :models="models[`${bikeBrand}`] || []"></FormBikeSection>
                        </div>
                        <label for="priceB">Precio:</label>
                        <div class="lineSpacing"></div>
                        <input class="form-control" id="priceB" type="text" v-model="priceB" autocomplete="disabled" required>
                        <div v-if="priceB > 1500"><p class="priceWarn">*Productos similares se han vendido con un precio medio de 1250€</p></div>
                        <div class="lineSpacing1em"></div>
                        <label for="correoE" class="mb-2">Correo Electrónico:</label>
                        <div class="lineSpacing"></div>
                        <input class="form-control" type="email" id="correoE" required>


                    </div>

                    <div class="col-12" v-if="option === 'helm'">
                        <label for="helmList">Marca de su casco: </label>
                        <br>
                        <select class="form-control" id="helmList" v-model="helmModel">
                            <option value="Uvex">Uvex</option>
                            <option value="Specialized">Specialized</option>
                            <option value="POC">POC</option>
                            <option value="Garneau">Garneau</option>
                            <option value="Bontrager">Bontrager</option>
                        </select>
                        <div class="lineSpacing2em"></div>
                        <label for="fileUp">Imágenes del producto (Min 1 - Máx 3):</label>
                        <div class="uploadFileBtn">
                            <input class="form-control" type="file" id="fileUp" name="helmFile" multiple data-multiple-caption="" required/>
                            <label for="fileUp"><span></span></label>
                        </div>

                        <div class="lineSpacing"></div>

                        <label for="priceH">Precio:</label>
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
                    <div class="col-12">
                        <div v-if="option !== ''">
                            <button type="submit" class="btn btn-info offset-3 btnShadow" style="margin-top: 1em;" name="sendForm" @click="showModal = !showModal">Registrar Artículo</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div v-model="showModal">
            <div class="modal fade " id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
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
                priceB: '',
                showModal: false
            }
        },
        methods: {
            show(){
                this.$emit('formSent');
            }
        },

        components: {
            FormBikeSection
        }
    }
</script>


<style>

</style>