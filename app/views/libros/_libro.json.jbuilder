json.extract! libro, :id, :titulo, :año, :created_at, :updated_at
json.url libro_url(libro, format: :json)
