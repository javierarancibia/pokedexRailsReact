class Pokemon < ApplicationRecord
    
    def self.api_call 
        pokemons = []
        response = HTTParty.get("https://pokeapi.co/api/v2/pokemon?limit=12&offset=1")
        response = JSON.parse(response.body)
        response.each do |k, value|
            if k == "results"
                value.each do |key, val|
                response = HTTParty.get(key["url"])
                response = JSON.parse(response.body)
                pokemons.push(response)
                end
            end
        end

        return pokemons 
        # pokemons.map do |poke|
        #     Pokemon.new(img:poke['sprites']['other']['dream_world']["front_default"], name: poke['forms'][0]['name'], weight: poke['weight'], poke_type: poke['types'][0]['type']['name'], poke_ability: poke['abilities'][0]['ability']['name'], poke_id: poke['id'])
        # end

    end

    def self.poke_detail(poke_name)
        selected_pokemon = []
        response = HTTParty.get("https://pokeapi.co/api/v2/pokemon/#{poke_name}")
        response = JSON.parse(response.body)

        return response

    end

    
end
