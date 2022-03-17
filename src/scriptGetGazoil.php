<?php

file_put_contents('./xmlGazoil/test.zip', fopen("https://www.data.gouv.fr/fr/datasets/r/087dfcbc-8119-4814-8412-d0a387fac561", "r"));

$zip = new ZipArchive;
if ($zip->open('./xmlGazoil/test.zip') === TRUE) {
    $zip->extractTo('./xmlGazoil/');
    $zip->close();
    echo 'ok';
} else {
    echo 'échec';
}