
export class Pais{
    public nombre: String;
    public flag: String;
    public capital: String;
    public languages: String[];
    public subregion: String;

    constructor(nombre: String, flag: String, capital: String, languages: String[], subregion: String){
        this.nombre = nombre;
        this.flag = flag;
        this.capital = capital;
        this.languages = languages;
        this.subregion = subregion;
    }
}