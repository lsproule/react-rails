# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "react" # @19.0.0
pin "react-dom" # @19.0.0
pin "react-dom/client", to: "react-dom--client.js" # @19.0.0
pin "process" # @2.1.0
pin "scheduler" # @0.25.0
pin "turbo-mount", to: "turbo-mount.min.js"
pin "turbo-mount/react", to: "turbo-mount/react.min.js"
