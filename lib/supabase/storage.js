import { supabase } from "@/lib/supabase/supabase"

export async function uploadImage(file, bucket, folder = "") {
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = folder ? `${folder}/${fileName}` : fileName;

    const { error } = await supabase.storage
        .from(bucket)
        .upload(filePath, file);
    
    if (error) {
        throw new Error(error.message)
    }
    return filePath
};

export function getPublicUrl(bucket, filePath) {
    const { data } = supabase.storage.from(bucket).getPublicUrl(filePath)
    return data.publicUrl
}

export async function deleteImage(bucket, filePath) {
    const { error } = await supabase.storage.from(bucket).remove([filePath])
    if(error) throw new Error(error.message)
}