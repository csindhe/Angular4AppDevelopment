import { Blog } from '../service/blog.model';

export const initialBlogList: Blog[] = [
    {   
        id: new Date().getTime(), 
        title: 'Lord of the Rings', 
        content: `Set in the fictional world of Middle-earth, 
                  the films follow the hobbit Frodo Baggins (Elijah Wood) as he and 
                  the Fellowship embark on a quest to destroy the One Ring, and thus 
                  ensure the destruction of its maker, the Dark Lord Sauron. 
                  The Fellowship eventually splits up and Frodo continues the quest together with 
                  his loyal companion Sam (Sean Astin) and the treacherous Gollum (Andy Serkis). 
                  Meanwhile, Aragorn (Viggo Mortensen), heir in exile to the throne of Gondor, Legolas, Gimli, 
                  Merry and Pippin, and the wizard Gandalf (Ian McKellen) unite to rally the Free Peoples of 
                  Middle-earth in the War of the Ring.`,
        author: 'JRR Tolkien',
        thumbsup: 95,
        thumbsdown: 2
    },
    {   
        id: new Date().getTime(), 
        title: 'The GodFather', 
        content: `The Godfather is an American film series that consists of three crime drama films 
                  directed by Francis Ford Coppola inspired by the novel of the same name by Italian 
                  American author Mario Puzo. The series follows the trials of the Corleone family, 
                  Italian Americans whose patriarch, Vito Corleone, rises to be a major figure in 
                  American organized crime. His youngest son, Michael Corleone, becomes his successor.`,
        author: 'Mario Puzo',
        thumbsup: 101,
        thumbsdown: 1
    },
    {   
        id: new Date().getTime(), 
        title: 'Shawshank Redemption', 
        content: `The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, 
                  based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the 
                  story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State 
                  Penitentiary for the murder of his wife and her lover, despite his claims of innocence. 
                  Over the following two decades, he befriends a fellow prisoner, contraband smuggler 
                  Ellis "Red" Redding (Morgan Freeman), and becomes instrumental in a money laundering operation 
                  led by the prison warden Samuel Norton (Bob Gunton). William Sadler, Clancy Brown, Gil Bellows, 
                  and James Whitmore appear in supporting roles.`,
        author: 'Stephen King',
        thumbsup: 100,
        thumbsdown: 1
    },
    {   
        id: new Date().getTime(), 
        title: `Schindler's List`, 
        content: `Schindler's List is a 1993 American historical period drama film directed and co-produced 
                  by Steven Spielberg and written by Steven Zaillian. It is based on the novel Schindler's 
                  Ark by Australian novelist Thomas Keneally. The film relates a period in the life of Oskar Schindler, 
                  a Sudeten German businessman, during which he saved the lives of more than a thousand mostly 
                  Polish-Jewish refugees from the Holocaust by employing them in his factories during World War II. 
                  It stars Liam Neeson as Schindler, Ralph Fiennes as SS officer Amon Göth, and Ben Kingsley as 
                  Schindler's Jewish accountant Itzhak Stern.`,
        author: 'Thomas Keneally',
        thumbsup: 99,
        thumbsdown: 2
    }
];