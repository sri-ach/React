import { Scientist } from "./scientist"

export const madamCurie = new Scientist('Maria Skłodowska-Curie', 'szV5sdG')
madamCurie.profession = 'physicist and chemist'
madamCurie.awards = ['Nobel Prize in Physics','Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']
madamCurie.discovered = "polonium (element)"



export const heddy = new Scientist('Hedy Lamarr', 'yXOvdOS', 'm')
heddy.theme = {
  backgroundColor: 'black',
  color: 'pink'
}


export const katsuko = new Scientist('Katsuko Saruhashi', 'YfeOqp2')
katsuko.profession = "geochemist"
katsuko.awards = ['Miyake Prize for geochemistry', 'Tanaka Prize']
katsuko.discovered = 'a method for measuring carbon dioxide in seawater'