#!/bin/bash

# Enable colors
GREEN="\033[0;36m"
RESET="\033[0m"

# Title
echo -e "${GREEN}"
echo "======================================================="
echo
echo "           Star Technology Packmode Picker"
echo
echo "======================================================="
echo -e "${RESET}"

# Set up paths
script_dir="$(cd "$(dirname "$0")" && pwd)"
default_path="$script_dir/packmode/default"
hard_path="$script_dir/packmode/hard"
abydos_path="$script_dir/packmode/abydos"
target_path="$script_dir"

# Display menu
echo "[D] Default - the standard experience"
echo "[H] Hard - for the masochistic"
echo "[A] Abydos - dehydration enjoyer"
echo

# Get user choice
while true; do
    read -rp "Enter Packmode (D, H, or A): " choice
    case "${choice^^}" in
        D)
            selected="Default"
            selected_path="$default_path"
            break
            ;;
        H)
            selected="Hard"
            selected_path="$hard_path"
            break
            ;;
        A)
            selected="Abydos"
            selected_path="$abydos_path"
            break
            ;;
        *)
            echo "Invalid choice. Please select D, H, or A."
            ;;
    esac
done

# Apply packmode
echo
echo "Applying Packmode [$selected]..."
echo
echo "======================================================================================="
echo "======================================================================================="

# Remove existing chapters directory
chapters_path="$target_path/config/ftbquests/quests/chapters"
if [ -d "$chapters_path" ]; then
    rm -rf "$chapters_path"
fi

# Copy selected packmode files to target
cp -r "$selected_path/"* "$target_path/"

echo "======================================================================================="
echo "======================================================================================="
echo
echo "Packmode switch complete!"
echo

# Pause (optional)
read -rp "Press Enter to exit..."
