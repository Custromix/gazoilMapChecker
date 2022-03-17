<?php

file_put_contents('test.zip', fopen("https://donnees.roulez-eco.fr/opendata/instantane", "r"));

$zip = new ZipArchive;
if ($zip->open('test.zip') === TRUE) {
    $zip->extractTo('./xml/');
    $zip->close();
    echo 'ok';
} else {
    echo 'échec';
}
