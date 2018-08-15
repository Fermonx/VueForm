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
            <form method="POST" action="./modal">
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
                            <option value="Merida">Merida</option>
                            <option value="Giant">Giant</option>
                            <option value="Trek">Trek</option>
                        </select>
                        <div class="lineSpacing2em"></div>

                        <div class="row">

                            <div class="col-12" v-if="bikeBrand === 'Merida'">

                                <label for="bikeModelList">Seleccione su Modelo:</label>

                                <select class="form-control" id="bikeModelList" v-model="bikeModel">
                                    <option value="Reacto">Reacto</option>
                                    <option value="Scultura">Scultura</option>
                                    <option value="BigNine">Big Nine</option>
                                    <option value="Other">Otro Modelo</option>
                                </select>

                                <div class="lineSpacing1em"></div>

                                <div v-if="bikeModel === 'Other'">
                                    <label for="otherModel">Escriba el nombre del modelo:</label>
                                    <div class="lineSpacing"></div>
                                    <input class="form-control" type="text" id="otherModel" placeholder="Modelo (Ej: Scultura)">
                                    <div class="lineSpacing1em"></div>
                                    <label for="damageRate">Estado de la Bicicleta:</label>
                                    <div class="lineSpacing"></div>
                                    <input id="damageRate" type="range" min="0" max="4" step="1" v-model="damageRange">
                                    <div v-if="damageRange === '0'">0: Completamente Nueva</div>
                                    <div v-if="damageRange === '1'">1: Muy poco uso</div>
                                    <div v-if="damageRange === '2'">2: Usada</div>
                                    <div v-if="damageRange === '3'">3: Bastante Usada</div>
                                    <div v-if="damageRange === '4'">4: Puede necesitar repuestos</div>

                                    <div class="lineSpacing1em"></div>

                                </div>

                                <div v-else>
                                    <label for="damageRate">Estado de la Bicicleta:</label>
                                    <div class="lineSpacing"></div>
                                    <input id="damageRate" type="range" min="0" max="4" step="1" v-model="damageRange">
                                    <div v-if="damageRange === '0'">0: Completamente Nueva</div>
                                    <div v-if="damageRange === '1'">1: Muy poco uso</div>
                                    <div v-if="damageRange === '2'">2: Usada</div>
                                    <div v-if="damageRange === '3'">3: Bastante Usada</div>
                                    <div v-if="damageRange === '4'">4: Puede necesitar repuestos</div>

                                </div>
                                <div class="lineSpacing1em"></div>

                                <label for="fileUp">Seleccione Imágenes del producto (Min 1 - Máx 3):</label>
                                <div class="uploadFileBtn">

                                    <input type="file" id="fileUp"  class="form-control" name="helmFile" multiple data-multiple-caption="" required/>
                                    <label for="fileUp"><span></span></label>

                                </div>



                            </div>

                            <div class="col-12" v-if="bikeBrand === 'Giant'">

                                <label for="bikeModelList">Seleccione su Modelo:</label>

                                <div class="lineSpacing"></div>

                                <select class="form-control" id="bikeModelList" v-model="bikeModel">
                                    <option value="xtc">XTC</option>
                                    <option value="Reign">Reign</option>
                                    <option value="Talon">Talon</option>
                                    <option value="Other">Otro Modelo</option>
                                </select>

                                <div class="lineSpacing1em"></div>

                                <div v-if="bikeModel === 'Other'">
                                    <label for="otherModel">Escriba el nombre del modelo:</label>
                                    <div class="lineSpacing"></div>
                                    <input class="form-control" type="text" id="otherModel" placeholder="Modelo (Ej: Scultura)">
                                    <div class="lineSpacing1em"></div>
                                    <label for="damageRate">Estado de la Bicicleta:</label>
                                    <div class="lineSpacing"></div>
                                    <input id="damageRate" type="range" min="0" max="4" step="1" v-model="damageRange">
                                    <div v-if="damageRange === '0'">0: Completamente Nueva</div>
                                    <div v-if="damageRange === '1'">1: Muy poco uso</div>
                                    <div v-if="damageRange === '2'">2: Usada</div>
                                    <div v-if="damageRange === '3'">3: Bastante Usada</div>
                                    <div v-if="damageRange === '4'">4: Puede necesitar repuestos</div>

                                </div>

                                <div v-else>
                                    <label for="damageRate">Estado de la Bicicleta:</label>
                                    <div class="lineSpacing"></div>
                                    <input id="damageRate" type="range" min="0" max="4" step="1" v-model="damageRange">
                                    <div v-if="damageRange === '0'">0: Completamente Nueva</div>
                                    <div v-if="damageRange === '1'">1: Muy poco uso</div>
                                    <div v-if="damageRange === '2'">2: Usada</div>
                                    <div v-if="damageRange === '3'">3: Bastante Usada</div>
                                    <div v-if="damageRange === '4'">4: Puede necesitar repuestos</div>


                                </div>
                                <div class="lineSpacing1em"></div>

                                <label for="fileUp">Seleccione Imágenes del producto (Min 1 - Máx 3):</label>
                                <div class="uploadFileBtn">

                                    <input type="file" id="fileUp"  class="form-control" name="helmFile" multiple data-multiple-caption="" required/>
                                    <label for="fileUp"><span></span></label>

                                </div>

                            </div>

                            <div class="col-12" v-if="bikeBrand === 'Trek'">

                                <label for="bikeModelList">Seleccione su Modelo:</label>

                                <select class="form-control" id="bikeModelList" v-model="bikeModel">
                                    <option value="TopFuel">Top Fuel</option>
                                    <option value="Superfly">Superfly</option>
                                    <option value="FuelEx">Fuel Ex</option>
                                    <option value="Other">Otro Modelo</option>
                                </select>

                                <div class="lineSpacing1em"></div>

                                <div v-if="bikeModel === 'Other'">
                                    <label for="otherModel">Escriba el nombre del modelo:</label>
                                    <div class="lineSpacing"></div>
                                    <input class="form-control" type="text" id="otherModel" placeholder="Modelo (Ej: Scultura)">
                                    <div class="lineSpacing1em"></div>
                                    <label for="damageRate">Estado de la Bicicleta:</label>
                                    <div class="lineSpacing"></div>
                                    <input id="damageRate" type="range" min="0" max="4" step="1" v-model="damageRange">
                                    <div v-if="damageRange === '0'">0: Completamente Nueva</div>
                                    <div v-if="damageRange === '1'">1: Muy poco uso</div>
                                    <div v-if="damageRange === '2'">2: Usada</div>
                                    <div v-if="damageRange === '3'">3: Bastante Usada</div>
                                    <div v-if="damageRange === '4'">4: Puede necesitar repuestos</div>

                                </div>

                                <div v-else>
                                    <label for="damageRate">Estado de la Bicicleta:</label>
                                    <div class="lineSpacing"></div>
                                    <input id="damageRate" type="range" min="0" max="4" step="1" v-model="damageRange">
                                    <div v-if="damageRange === '0'">0: Completamente Nueva</div>
                                    <div v-if="damageRange === '1'">1: Muy poco uso</div>
                                    <div v-if="damageRange === '2'">2: Usada</div>
                                    <div v-if="damageRange === '3'">3: Bastante Usada</div>
                                    <div v-if="damageRange === '4'">4: Puede necesitar repuestos</div>


                                </div>
                                <div class="lineSpacing1em"></div>

                                <label for="fileUp">Seleccione Imágenes del producto (Min 1 - Máx 3):</label>
                                <div class="uploadFileBtn">

                                    <input type="file" id="fileUp" class="form-control" name="helmFile" multiple data-multiple-caption="" required/>
                                    <label for="fileUp"><span></span></label>

                                </div>

                            </div>



                        </div>

                        <div class="lineSpacing2em"></div>



                        <label for="priceB">Precio de su producto:</label>
                        <div class="lineSpacing"></div>
                        <input class="form-control" id="priceB" type="text" v-model="priceB" autocomplete="disabled" required>
                        <div v-if="priceB > 1500"><p class="priceWarn">*Productos similares se han vendido con un precio medio de 1250€</p></div>

                        <div class="lineSpacing2em"></div>

                        <label for="correoE">Correo Electrónico:</label>
                        <div class="lineSpacing"></div>
                        <input class="form-control" type="email" id="correoE" autocomplete="disabled" required>


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
                            <input class="form-control" type="file" id="fileUp2" name="helmFile" multiple data-multiple-caption="" required/>
                            <label for="fileUp2"><span></span></label>
                        </div>

                        <div class="lineSpacing"></div>

                        <label for="priceH">Precio de su producto:</label>
                        <div class="lineSpacing"></div>
                        <input class="form-control" id="priceH" type="text" v-model="priceH" autocomplete="disabled" required>
                        <div v-if="priceH > 800"><p class="priceWarn">*Productos similares se han vendido con un precio medio de 750€</p></div>

                        <div class="lineSpacing2em"></div>

                        <label for="correoE">Correo Electrónico:</label>
                        <div class="lineSpacing"></div>
                        <input class="form-control" type="email" id="correoE" autocomplete="disabled" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <button type="submit" class="btn btn-info" style="margin-top: 1em" name="sendForm">Registrar Artículo</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>


<script>
    export default {
        name: "fields",

        data (){
            return{
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

        }
    }
</script>


<style>

</style>