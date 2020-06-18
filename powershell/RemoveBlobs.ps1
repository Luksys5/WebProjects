$storageAccountName = "mywebstorage1"
$storageAccountKey = ""
$storageContainer = "`$web"

$context = New-AzStorageContext -StorageAccountName $storageAccountName -StorageAccountKey $storageAccountKey

$Token = $null;
Add-Type -AssemblyName "System.Web"

$filePath = "D:\Repository\WebProjects\cv-website\build"

function Upload-Recursively {
    param(
        [Parameter(Mandatory=$true)] [String] $path,
        [Parameter(Mandatory=$false)] [String] $blobPath
    )

    $items = Get-ChildItem -Path $path
    foreach ($item in $items)
    {
        if ($item.Mode -match "d")
        {
            Upload-Recursively -path ($path + "/" + $item.Name) -blobPath ($blobPath + $item.Name + "/")
        }
        else
        {
            $nameAndExt = $item.Name -split '\.'
            if ($nameAndExt.Length -gt 1)
            {
                $name = ""
                foreach ($namePart in $nameAndExt)
                {
                    if ($name -eq "")
                    {
                        $name = $namePart;
                    }
                    else
                    {
                        $name += "." + $namePart.toLower();
                    }
                }
            }
            else 
            {
                $name = $item.Name;
            }
            Set-AzStorageBlobContent -Container $storageContainer -File $item.FullName -Blob ($blobPath + $name) -Context $context -Force -Properties @{ "ContentType" = [System.Web.MimeMapping]::GetMimeMapping($item) }
        }
    }
}



## Removes all blobs in container
Function Remove-AllBlobs 
{
    do
    { 
        $blobs = Get-AzStorageBlob -Container $storageContainer -MaxCount 150 -Context $context -Prefix ""
        $date = [System.DateTime]::Now.ToShortDateString();
        $time = [System.DateTime]::Now.ToShortTimeString();
        if ($blobs.Length -le 0)
        {
            Write-Host "$($date) $($time)::No more blobs exist"
            Break;
        }
        $Token = $Blobs[$blobs.Count -1].ContinuationToken;

        foreach($blob in $blobs){
            $date = [System.DateTime]::Now.ToShortDateString();
            $time = [System.DateTime]::Now.ToShortTimeString();
            Write-Host "$($date) $($time)::Removing blob $($blob.Name)"
            Remove-AzStorageBlob -Blob $blob.Name -Container $storageContainer -Context $context
        }
    }
    While ($Token -ne $null)  


}

Remove-AllBlobs


Upload-Recursively -path $filePath
