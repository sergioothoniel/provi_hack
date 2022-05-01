export const database = [
    {
        idUsuario: 1,
        usuario: 'João X',
        endereço: 'Armando Lombardi, 178',
        bairro: 'Barra da Tijuca',
        municipio: 'Rio de Janeiro',
        uf: 'RJ',
        locador: true,
        locatario: {
            ativo: false,
            carrosAnunciados: []
        }
    

    },
    {
        idUsuario: 2,
        usuario: 'Pedro Y',
        endereço: 'Marquês de Abrantes, 23',
        bairro: 'Flamengo',
        municipio: 'Rio de Janeiro',
        uf: 'RJ',
        locador: true,
        locatario: {
            ativo: true,
            carrosAnunciados: 
                {
                    ativo: true,
                    modelo: 'Voyage',
                    fotos:[
                        'https://img1.icarros.com/dbimg/imgadicionalnoticia/4/98279_1',
                        'https://img1.icarros.com/dbimg/imgadicionalnoticia/4/98277_1',
                        'https://img1.icarros.com/dbimg/imgadicionalnoticia/4/98274_1'
                    ],
                    combustivel: 'Gasolina',
                    arCondicionado: true,
                    quatroPortas: true,
                    preço: 120
                }
            
        }
    

    },
    {
        idUsuario: 3,
        usuario: 'Saul F',
        endereço: 'Armando Lombardi, 178',
        bairro: 'Barra da Tijuca',
        municipio: 'Rio de Janeiro',
        uf: 'RJ',
        locador: true,
        locatario: {
            ativo: true,
            carrosAnunciados: 
                {
                    ativo: true,
                    modelo: 'Voyage',
                    fotos:[
                        'https://img1.icarros.com/dbimg/imgadicionalnoticia/4/98279_1',
                        'https://img1.icarros.com/dbimg/imgadicionalnoticia/4/98277_1',
                        'https://img1.icarros.com/dbimg/imgadicionalnoticia/4/98274_1'
                    ],
                    combustivel: 'Gasolina',
                    arCondicionado: true,
                    quatroPortas: true,
                    preço: 120
                }
            
        }
    

    },
    {
        idUsuario: 4,
        usuario: 'Arlindo Cruz',
        endereço: 'Rua da Feira, 220',
        bairro: 'Bangu',
        municipio: 'Rio de Janeiro',
        uf: 'RJ',
        locador: false,
        locatario: {
            ativo: true,
            carrosAnunciados: 
                {
                    ativo: true,
                    modelo: 'Prius',
                    fotos:[
                        'https://t.ctcdn.com.br/kegH6NpugxZ_O5xb6a-pE1JVM4k=/1024x0/smart/i355194.jpeg',
                        'https://t.ctcdn.com.br/ntHgA_nvYEKjN2asWvpW79vG1-8=/1024x0/smart/i355195.jpeg',
                        'https://t.ctcdn.com.br/6ntpa6hoNjLBj1tVmlDiXTc0rpU=/1024x0/smart/i355198.jpeg'
                    ],
                    combustivel: 'Híbrido',
                    arCondicionado: true,
                    quatroPortas: true,
                    preço: 95
                }
            
        }
    

    },
    {
        idUsuario: 5,
        usuario: 'Marcelo M',
        endereço: 'Avenida Gláucio Gil, 1120',
        bairro: 'Recreio dos Bandeirantes',
        municipio: 'Rio de Janeiro',
        uf: 'RJ',
        locador: true,
        locatario: {
            ativo: true,
            carrosAnunciados: {
                ativo: true,
                modelo: 'Audi Q7',
                fotos:[
                    'https://quatrorodas.abril.com.br/wp-content/uploads/2019/06/audi-q7-2020-1600-02-e1561576093215.jpg',
                    'https://quatrorodas.abril.com.br/wp-content/uploads/2019/06/audi-q7-2020-1600-0b-e1561576634747.jpg',
                    'https://quatrorodas.abril.com.br/wp-content/uploads/2019/06/audi-q7-2020-1600-0c-e1561575930679.jpg'
                ],
                combustivel: 'Elétrico',
                arCondicionado: true,
                quatroPortas: true,
                preço: 230
            }
        }
    

    },
    {
        idUsuario: 6,
        usuario: 'João Gomes',
        endereço: 'Armando Lombardi, 178',
        bairro: 'Barra da Tijuca',
        municipio: 'Rio de Janeiro',
        uf: 'RJ',
        locador: true,
        locatario: {
            ativo: true,
            modelo: 'Audi Q7',
            fotos:[
                'https://quatrorodas.abril.com.br/wp-content/uploads/2019/06/audi-q7-2020-1600-02-e1561576093215.jpg',
                'https://quatrorodas.abril.com.br/wp-content/uploads/2019/06/audi-q7-2020-1600-0b-e1561576634747.jpg',
                'https://quatrorodas.abril.com.br/wp-content/uploads/2019/06/audi-q7-2020-1600-0c-e1561575930679.jpg'
            ],
            combustivel: 'Elétrico',
            arCondicionado: true,
            quatroPortas: true,
            preço: 230
        }
    

    },
    {
        idUsuario: 7,
        usuario: 'William Arão',
        endereço: 'Estrada do Campinho, 112',
        bairro: 'Campo Grande',
        municipio: 'Rio de Janeiro',
        uf: 'RJ',
        locador: true,
        locatario: {
            ativo: true,
            modelo: 'Ônix',
            fotos:[
                'https://otimacar.com.br/carros/ef592ad9fc602a344b88b26167088dac-thumbjpg-chevrolet-onix-8448319-900-675-70.jpg',
                'https://otimacar.com.br/carros/cd9bf696cbdefe756fa08462287a1e4a-thumbjpg-chevrolet-onix-8448319-900-675-70.jpg',
                'https://otimacar.com.br/carros/200fb5bf0c3d8ce79b9ebff6e70526d5-thumbjpg-chevrolet-onix-8448319-900-675-70.jpg'
            ],
            combustivel: 'GNV',
            arCondicionado: true,
            quatroPortas: true,
            preço: 75
        }
    

    },
    {
        idUsuario: 8,
        usuario: 'David Luiz',
        endereço: 'Avenida Senambetiba, 2643',
        bairro: 'Ipanema',
        municipio: 'Rio de Janeiro',
        uf: 'RJ',
        locador: true,
        locatario: {
            ativo: true,
            modelo: 'Ônix',
            fotos:[
                'https://otimacar.com.br/carros/ef592ad9fc602a344b88b26167088dac-thumbjpg-chevrolet-onix-8448319-900-675-70.jpg',
                'https://otimacar.com.br/carros/cd9bf696cbdefe756fa08462287a1e4a-thumbjpg-chevrolet-onix-8448319-900-675-70.jpg',
                'https://otimacar.com.br/carros/200fb5bf0c3d8ce79b9ebff6e70526d5-thumbjpg-chevrolet-onix-8448319-900-675-70.jpg'
            ],
            combustivel: 'GNV',
            arCondicionado: true,
            quatroPortas: true,
            preço: 75
        }
    

    },
    {
        idUsuario: 9,
        usuario: 'Jorge Jesus',
        endereço: 'Armando Lombardi, 178',
        bairro: 'Barra da Tijuca',
        municipio: 'Rio de Janeiro',
        uf: 'RJ',
        locador: true,
        locatario: {
            ativo: true,
            modelo: 'Renegade',
            fotos:[
                'https://quatrorodas.abril.com.br/wp-content/uploads/2018/08/180620_jeep_new-renegade-my19-limited_01.jpg',
                'https://quatrorodas.abril.com.br/wp-content/uploads/2018/08/180620_jeep_new-renegade-my19-limited_11.jpg',
                'https://quatrorodas.abril.com.br/wp-content/uploads/2018/08/180620_jeep_new-renegade-my19-limited_34.jpg'
            ],
            combustivel: 'Gasolina',
            arCondicionado: true,
            quatroPortas: true,
            preço: 195
        }

    },
    {
        idUsuario: 10,
        usuario: 'Paul S',
        endereço: 'Avenida Niemeyer, 540',
        bairro: 'São Conrado',
        municipio: 'Rio de Janeiro',
        uf: 'RJ',
        locador: true,
        locatario: {
            ativo: true,
            modelo: 'Fiat 500e',
            fotos:[
                'https://s2.glbimg.com/N3rjcxHcaWXQUgw9r0VcEUI8EE4=/0x0:1500x921/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/C/X/J0ar8tQRyzqJBdcJXFmA/fiat-500-393.jpg',
                'https://s2.glbimg.com/VBluLxj14vsFM5phl3uapQMi6BU=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/c/0/0azSVOShyGoPGf6xyBJA/2020-06-08-fiat-500-la-prima-2021-1600-06.jpg',
                'https://s2.glbimg.com/M1BLn1kV600PqlY5HMHV2-w4UXc=/0x0:1500x1019/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/O/G/CL3QkmRyeZcomUYlodtQ/fiat-500-la-prima-551.jpg'
            ],
            combustivel: 'Elétrico',
            arCondicionado: true,
            quatroPortas: true,
            preço: 140
        }

    },
    {
        idUsuario: 11,
        usuario: 'David Luiz',
        endereço: 'Avenida Senambetiba, 2643',
        bairro: 'Ipanema',
        municipio: 'Rio de Janeiro',
        uf: 'RJ',
        locador: true,
        locatario: {
            ativo: true,
            modelo: 'Ônix',
            fotos:[
                'https://otimacar.com.br/carros/ef592ad9fc602a344b88b26167088dac-thumbjpg-chevrolet-onix-8448319-900-675-70.jpg',
                'https://otimacar.com.br/carros/cd9bf696cbdefe756fa08462287a1e4a-thumbjpg-chevrolet-onix-8448319-900-675-70.jpg',
                'https://otimacar.com.br/carros/200fb5bf0c3d8ce79b9ebff6e70526d5-thumbjpg-chevrolet-onix-8448319-900-675-70.jpg'
            ],
            combustivel: 'GNV',
            arCondicionado: true,
            quatroPortas: true,
            preço: 75
        }
    

    },
    {
        idUsuario: 12,
        usuario: 'Saul F',
        endereço: 'Armando Lombardi, 178',
        bairro: 'Barra da Tijuca',
        municipio: 'Rio de Janeiro',
        uf: 'RJ',
        locador: true,
        locatario: {
            ativo: true,
            carrosAnunciados: 
                {
                    ativo: true,
                    modelo: 'Voyage',
                    fotos:[
                        'https://img1.icarros.com/dbimg/imgadicionalnoticia/4/98279_1',
                        'https://img1.icarros.com/dbimg/imgadicionalnoticia/4/98277_1',
                        'https://img1.icarros.com/dbimg/imgadicionalnoticia/4/98274_1'
                    ],
                    combustivel: 'Gasolina',
                    arCondicionado: true,
                    quatroPortas: true,
                    preço: 120
                }
            
        }
    },
    {
        idUsuario: 13,
        usuario: 'Marcelo M',
        endereço: 'Avenida Gláucio Gil, 1120',
        bairro: 'Recreio dos Bandeirantes',
        municipio: 'Rio de Janeiro',
        uf: 'RJ',
        locador: true,
        locatario: {
            ativo: true,
            carrosAnunciados: {
                ativo: true,
                modelo: 'Audi Q7',
                fotos:[
                    'https://quatrorodas.abril.com.br/wp-content/uploads/2019/06/audi-q7-2020-1600-02-e1561576093215.jpg',
                    'https://quatrorodas.abril.com.br/wp-content/uploads/2019/06/audi-q7-2020-1600-0b-e1561576634747.jpg',
                    'https://quatrorodas.abril.com.br/wp-content/uploads/2019/06/audi-q7-2020-1600-0c-e1561575930679.jpg'
                ],
                combustivel: 'Elétrico',
                arCondicionado: true,
                quatroPortas: true,
                preço: 230
            }
        }
    },
    {
        idUsuario: 14,
        usuario: 'Arlindo Cruz',
        endereço: 'Rua da Feira, 220',
        bairro: 'Bangu',
        municipio: 'Rio de Janeiro',
        uf: 'RJ',
        locador: false,
        locatario: {
            ativo: true,
            carrosAnunciados: 
                {
                    ativo: true,
                    modelo: 'Prius',
                    fotos:[
                        'https://t.ctcdn.com.br/kegH6NpugxZ_O5xb6a-pE1JVM4k=/1024x0/smart/i355194.jpeg',
                        'https://t.ctcdn.com.br/ntHgA_nvYEKjN2asWvpW79vG1-8=/1024x0/smart/i355195.jpeg',
                        'https://t.ctcdn.com.br/6ntpa6hoNjLBj1tVmlDiXTc0rpU=/1024x0/smart/i355198.jpeg'
                    ],
                    combustivel: 'Híbrido',
                    arCondicionado: true,
                    quatroPortas: true,
                    preço: 95
                }
            
        }
    

    },

    
]