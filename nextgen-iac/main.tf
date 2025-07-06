provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "main" {
  name     = "NextGenRg"
  location = "Italy North"
}

resource "azurerm_app_service_plan" "react_plan" {
  name                = "ASP-NextGenRg-9d92"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  kind                = "Linux"
  reserved            = true

  sku {
    tier = "Basic"
    size = "B1"
  }
}

resource "azurerm_app_service" "react_app" {
  name                = "NextGen-react"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  app_service_plan_id = azurerm_app_service_plan.react_plan.id

  https_only = true
  client_cert_mode = "Required"

  site_config {
    linux_fx_version = "DOCKER|ahmed377/nextgent:8c669ca483b652e867c31221aa24ed422bac44c7"
    always_on        = false

    minimum_elastic_instance_count = 1

    docker_registry_username = "ahmed377"
    docker_registry_password = "@205112002@"
    docker_registry_server_url = "https://index.docker.io/v1"
  }

  app_settings = {
    DOCKER_REGISTRY_SERVER_URL      = "https://index.docker.io/v1"
    DOCKER_REGISTRY_SERVER_USERNAME = "ahmed377"
    DOCKER_REGISTRY_SERVER_PASSWORD = "@205112002@"
    WEBSITES_ENABLE_APP_SERVICE_STORAGE = "false"
  }
}
