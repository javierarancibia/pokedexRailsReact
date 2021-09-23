class Api::V1::PokemonsController < ApplicationController

  before_action :set_pokemon, only: :show

  def index    
    render json: { pokemons: Pokemon.api_call }
  end

  def detail       
    render json: Pokemon.poke_detail(params[:name])
  end


  private
    def set_pokemon
      @pokemon = Pokemon.find(params[:id])
    end

    def pokemon_params
      params.permit(:img, :name, :weight, :poke_ability, :poke_type, :poke_id)
    end
end
