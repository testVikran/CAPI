find . -maxdepth 1 -type f -name '*.js' | while read -r file; do
    file=$(basename $file)
    filename="${file%.*}"
    mv "$file" "$file.model.js"

done
