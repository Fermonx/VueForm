<template>
    <div class="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h3>Registro de nuevo artículo</h3>
                </div>
            </div>
            <hr/>
            <form>
                <label for="radioOpts">Seleccione su artículo: </label>
                <div class="row formItem" id="radioOpts">
                    <div class="col-6">
                        <input type="radio" id="bikeOpt" class="option-input radio" name="rad" value="bike" v-model="option">
                        <label for="bikeOpt">Bicicleta</label>
                    </div>

                    <div class="col-4">
                        <input type="radio" id="helmOpt" class="option-input radio" name="rad" value="helm" v-model="option"><label for="helmOpt">Casco</label>

                    </div>
                </div>
                <div class="spacing2em"></div>
                <div class="row">
                    <div class="col-12" v-if="option === 'bike'">
                        <label for="bikeList">Seleccione la marca de su bicicleta:</label>
                        <br>
                        <select id="bikeList">
                            <option value="Merida">Merida</option>
                            <option value="Giant">Giant</option>
                            <option value="Trek">Trek</option>
                            <option value="Other">Otra Marca</option>
                        </select>
                    </div>

                    <div class="col-12" v-if="option === 'helm'">
                        <label for="helmList">Seleccione la marca de su casco: </label>
                        <br>
                        <select id="helmList">
                            <option value="Uvex">Uvex</option>
                            <option value="Specialized">Specialized</option>
                            <option value="POC">POC</option>
                            <option value="Garneau">Garneau</option>
                            <option value="Bontrage">Bontrager</option>
                        </select>
                        <div class="spacing2em"></div>
                        <label for="fileUp">Seleccione Imágenes del producto (Min 1 - Máx 3):</label>

                        <div class="uploadFileBtn">
                            <input type="file" id="fileUp" name="helmFile" multiple data-multiple-caption=""/>
                            <label for="fileUp"><span></span></label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <button type="submit" class="btn btn-outline-info" style="margin-top: 1em" name="sendForm">Enviar</button>
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
                option: 'helm',
                option: 'bike'
            }
        },
        methods: {

        }
    }
</script>

<style>

</style>





