# Login to Azure
Connect-AzAccount

# Define parameters
$resourceGroupName = "myResourceGroup"
$location = "West Europe"
$storageAccountName = "mystorageaccount"

# Create a new resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a new storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName Standard_LRS